import { Center, Heading, VStack } from "@chakra-ui/react";
import NavBar from "../../utils/universal/NavBar";
import Card from "./components/Card";
import Footer from '../../utils/universal/Footer';

const AboutInfo = [
  {
    src: "/pages/About/highschool.png",
    title: "Tarpon springs High School",
    description: "I was unlike the rest of kids in my class who loved sports. Even I loved sports specially basketball but only if I wasn't so insecure about my skills or what others thought of me while playing games. So, instead of ball I went to the computers to learn code. I certainly didn't learn much on my own and yea for those of you thinking that I was born in 1973, no. Stephen-1973 just seemed sort of cooler than my actual birthdate. Keep reading my blogs, one day I might tell you a whole story about why I built this site and my gmail and github are Stephen-1973. I think I may have left you with too much of a sad story. This school also gave me the best days of my life and also a best friend who helped me created this site and we are best friends, more like brothers to this date."
  },
  {
    src: "/pages/About/university.jpg",
    title: "Imperial College London",
    description: "This college gave me the life I am living right now. This is where I mastered all of my programming skills and met really great 'geeky' people who are currently running great startups. As most of your college life there wasn't anything new in mine. I worked hard, had a crush, went on dates, couldn't get the courage of propose to my crush. Yea, college can't get any better than that.",
    alternative: true
  },
  {
    src: "/pages/About/startup.jpeg",
    title: "Startup during university",
    description: "In my final year of the college, I created a startup, I cannot share any of its details as it is illegal since I don't own the company anymore. It's complicated."
  }, {
    src: "https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Job at amazon",
    description: "I worked at amazon as a data scientist. I was super excited about this job like any other person while starting a job after his final year. At this point I made a lot of friends at amazon and most of them were working in area of web development. They have shown me all the cool tricks/website you can build using javascript and that was it I decided to startup again, quit the job and was on my way to learn web development.",
    alternative: true

  },
  {
    src: "/pages/About/webdevelopment.png",
    title: "Mastered Web Development",
    description: "It took me quite some time to master web development. Learning all million javascript variantions. I didn't have to but I got lost along the way and wasted a lot of time on what I needed to learn."
  },
  {
    src: "/pages/About/codding.in.jpeg",
    title: "First step towards new startup",
    description: "I was always interested in teaching. My mom used to tell I am pretty good at teaching and should give teacher career a thought. But I didn't like the idea of teaching of only a few students everyday and new students every year. So, I came up with this website where I teach the entire world, whoevers interested the best skills they need to land a job in FAANG or startup.",
    alternative: true

  }
]

export default function AboutPage() {
  return (
    <>
      <NavBar activeTab={'About'} />
      <Center my={10}>
        <Heading>
          It&apos;s great to see you here!
        </Heading>
      </Center>
      <VStack spacing={[5, 5, 10]}>
        {AboutInfo.map(
          (data) => {
            return (
              <Card key={data.title} data={data} />
            )
          }
        )}
      </VStack>
      <Footer />
      {/* <Script id="gsap-min-js" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
        integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer" strategy="beforeInteractive">
          </Script>
          <Script id='ScrollTrigger-gsap-js' src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"
        integrity="sha512-CPA5LMoJI/a5HkSIAKcBtFXe4gqGjPUL2ExF/3PmhrrHI17wod9xOqqF+0WZQRKIIq0KwF8oG5BaiWobtrke3A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" strategy="beforeInteractive">
      </Script>
      <Script id='custom-js-file' src='/gsap.js' strategy="afterInteractive"></Script> */}
    </>
  )
}