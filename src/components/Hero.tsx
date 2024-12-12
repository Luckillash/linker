import { ArrowRight } from 'lucide-react';
import Container from './layout/Container';
import { fadeInUp, fadeIn, slideInRight } from '../utils/animations';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { Opulento } from 'uvcanvas';

const Hero = () => {

	return (
	
		<div className="relative min-h-[100vh] flex items-center">

			<div 
		
			className={`absolute inset-0 z-0 ${fadeIn}`}
			
			style={{
			
				backgroundImage: 'url("https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80")',
			
				backgroundSize: 'cover',
			
				backgroundPosition: 'center',
			
				animationDuration: '1.5s',
			
			}}
			
			>
				
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />

			</div>
			
			<Container className="relative z-10 py-32">

				<h1 className={`w-full text-5xl md:text-6xl font-bold mb-6 leading-tight text-white`}>

					<Typewriter 
					
					words={["Internet estés donde estés"]} 
					
					/> 

				</h1>
				
				<p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl`} >
					
					Starlink V4 entrega velocidad, fiabilidad, y cobertura desde cualquier lugar.
				
				</p>
				
				<div className={`flex flex-col sm:flex-row gap-4`} >

					<a href="https://wa.me/+56994370903">
					
						<button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 flex items-center gap-2 justify-center hover-lift">
						
							Pide el tuyo <ArrowRight className="w-5 h-5" />
						
						</button>

					</a>
					
					<a href="https://www.starlink.com/cl/residential?referral=RC-481067-34312-6&utm_source=google&utm_medium=paid&utm_campaign=sls_cl_src_ggl_brd_stk-pe&utm_content=sls_cl_src_ggl_brd_stk-pe_res_gsa_v4s_txt_es-419_egn0724&utm_term=stk-pe_starlink&utm_id=&gad_source=1&gclid=Cj0KCQiAsOq6BhDuARIsAGQ4-zgyBm1aXCMiEK-fSvOPusRxLoDT2fFVwR4a0bQwiN21rCSpEHLSHF4aAk5GEALw_wcB">

						<button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 hover-lift">
						
							Aprende más
						
						</button>

					</a>
				
				</div>
			
			</Container>
		
		</div>
	
	);

};

export default Hero;