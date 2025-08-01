import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    console.log('Server: Received form data:', formData);
    console.log('Server: Auth key available:', !!process.env.NEXT_PUBLIC_WEBHOOK_AUTH);
    
    // Use the correct webhook URL
    const webhookUrl = 'https://n8n-gridsite.enso.sh/webhook/gridsite/vendor-lead';
    
    console.log('Server: Making request to webhook URL:', webhookUrl);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': process.env.N8N_API_KEY || '',
      },
      body: JSON.stringify(formData)
    });

    console.log('Server: Webhook response status:', response.status);
    console.log('Server: Webhook response status text:', response.statusText);

    if (response.ok) {
      const responseText = await response.text();
      console.log('Server: Webhook response body:', responseText);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Application submitted successfully' 
      });
    } else {
      const errorText = await response.text();
      console.error('Server: Webhook error response:', errorText);
      
      // Parse the error details for better messaging
      let errorDetails;
      try {
        errorDetails = JSON.parse(errorText);
      } catch {
        errorDetails = { message: errorText };
      }
      
      // Check if it's a workflow activation issue
      if (response.status === 404 && errorDetails.hint && errorDetails.hint.includes('workflow must be active')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Webhook workflow is not active. Please activate the workflow in n8n and try again.',
            details: errorDetails
          },
          { status: 503 } // Service Unavailable
        );
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: `Webhook returned ${response.status}: ${response.statusText}`,
          details: errorDetails
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Server: Error processing request:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 