// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://web3forms.com/api/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer bd7ffb83-e3d3-4b88-9b15-2a8d8fa9156d', // Your Public Access Key
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({ error: data.message });
      }
      
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error: any) {
      return res.status(500).json({ error: 'Error sending email: ' + error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
