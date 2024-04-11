import ImageView from "@/components/ImageView";

export default function Image({}) {
  const imagePaths = ["/img/img1.jpeg", "/img/img2.jpeg", "/img/img7.jpeg", "/img/img4.jpeg"];

  return (
    <ImageView images={imagePaths} />
  );
}
