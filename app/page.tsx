import Image from "next/image";

export default function Home() {
  return (
	
	<div className = "flex justify-center items-center min-h-screen w-full">
		<div className = "p-4 bg-white rounded-2xl shadow-md w-64 h-auto">
			<Image
				src = "/image-qr-code.png"
				width={239}
				height={24}
				alt="QR Code"
				className="border rounded-2xl mb-3"
			/>
			<h4 className = "font-bold text-black mb-3 text-center">Improve your front-end skills by building projects</h4>
			<p className = "text-gray-400 text-xs text-center mb-5">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
		</div>
	</div>
  );
}
