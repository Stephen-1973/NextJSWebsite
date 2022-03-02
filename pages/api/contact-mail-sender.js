import { SMTPClient } from "emailjs";


  const client = new SMTPClient({
  user: "info.triver@gmail.com",
  password: "Triver2018",
  host: 'smtp.gmail.com',
  ssl: true
  })

export default function ContactMailSender(req, res) {

  if (req.method === "POST") {
    const { name, email, text } = req.body;
    try {
      client.send({
        text: `This is ${name} from ${email} saying: ${text}`,
        from: "info.triver@gmail.com",
        to: "ststephen426@gmail.com",
        subject: "New message from codding.in"
      });
      res.status(201).json({
        message: "Email sent"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong"
      })
    }
    
    
  } else {
    res.status(400).json({
      message: "Hey!! Seems like you lost your way."
    });
  }
}