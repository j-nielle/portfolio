import Image from "next/image";
import Sample from "@/assets/images/sample-pic.jpg";
import svelteLogo from "@/assets/images/svelte-logo.png";
import tailwindLogo from "@/assets/images/tailwindcss-logo.png";
import nextjsLogo from "@/assets/images/nextjs-logo.png";

export default function PageContent() {
	return (
		<>
			<div className="outline outline-1 outline-black flex-grow bg-red-300 text-center flex flex-col">
				<div className="bg-blue-400 min-h-40 flex justify-center items-center flex-col">
					<div className="">Frontend Developer</div>
					<div className="">(some text here...)</div>
				</div>
				<div className="bg-red-500 flex-grow p-5 flex flex-col space-y-4 justify-center items-center">
					<span>Projects:</span>
					<div className="flex flex-col md:max-xl:flex-row gap-4">
						<div className="bg-purple-400 h-1/4 p-4">
							<Image src={Sample} className="h-auto w-full object-cover" alt="sample" />
							<div className="outline outline-1 outline-blue-600 w-fit *:h-5 *:w-fit bg-white rounded relative bottom-3 z-10 flex-row flex gap-0.5">
								<Image src={svelteLogo} className="" alt="svelte logo" />
								<Image src={tailwindLogo} className="" alt="svelte logo" />
								<Image src={svelteLogo} className="" alt="svelte logo" />
							</div> {/* techstack icons */}
							<p>MoodTrail</p>
						</div>
						<div className="bg-purple-400 h-1/4 p-4">
							<Image src={Sample} className="h-auto w-full object-cover" alt="sample" />
							<div></div>
							<p>YAHSHUA Payroll</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}