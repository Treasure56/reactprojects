import Image from "next/image";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Demo from "@/components/Usestate";
import Rainbowlight from "@/components/rainbowLight";
import Type from "@/components/TypeText";
import App from "@/components/App";
import Modal from "@/components/Button";
import Button from "@/components/Button";
import ImageView from "@/components/ImageView";
import Quote from "@/components/Quote";
import Agify from "@/components/Agify";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Form />
      <Footer />
      <Demo />
      <Rainbowlight />
      <Type />
      <App />
      <Button />
      <ImageView />
      <Quote />
      <Agify />
      {/* <Navbar />
      <Navbar /> */}
      {/* <h1 className="text-primary">hello world vbhuidudjowhe</h1> */}
    </main>
  );
}
