import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const Projects =()=> {
  return (
    <section id='Projects' className='min-h-screen flex items-center justify-center py-20'>
    <RevealOnScroll>
    <div className='max-w-5xl mx-auto px-4'>
    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Featured Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'> Ecommerce Platform with Admin Page</h3>
            <p className='text-gray-400 mb-4'>
                Used React.js and fetched data from mockAPI, Admin panel with CRUD operations, Implemented jenkins CI/CD pipeline and containerized with Docker and Deployed on cloud server with Ngixn reverse Proxy.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "bootstrap","MockAPI", "AWS", "Docker", "Nginx", "Jenkins" ].map((tech, key)=> (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> 
                            {tech}
                            </span>
               ) )}
            </div>

                <div>
                    <a href="https://github.com/Double-Script/first-project" className='text-blue-400 hover:text-blue-300 transition-colors my-4  '> View Code</a>
                </div>

        </div> 



<div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'> Blogging Web App</h3>
            <p className='text-gray-400 mb-4'>
                Developed Blogging application with CRUD functionality, Implemented JWT Authentication Authorization, Containerized using Docker Compose and Deployed with Nginx.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {["React","Node.js", "MongoDb", "AWS", "Docker", "Nginx",].map((tech, key)=> (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> 
                            {tech}
                            </span>
               ) )}
            </div>

                <div>
                    <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4  '> View code</a>
                </div>

        </div>




<div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'> Secure Pixel</h3>
            <p className='text-gray-400 mb-4'>
                Built Secure System that hides encrypted msg inside image using Railfence Cipher and LSB stegenography used S3 for static file storage and used gitlab for CI/CD implementation and Deployed on Nginx with ssl certificate and Domain name.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {["Python","Django","SQLlite", "AWS", "Docker", "Nginx", "GitLab" ].map((tech, key)=> (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> 
                            {tech}
                            </span>
               ) )}
            </div>

                <div>
                    <a href="https://github.com/Double-Script/SecurePixel-main" className='text-blue-400 hover:text-blue-300 transition-colors my-4  '> View code</a>
                </div>

        </div>





<div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'> Transportaion Management System (Freelance Project)</h3>
            <p className='text-gray-400 mb-4'>
                Deliverd customized Transportaion Management System tailored to client requirements. Deplyed on Hostinger VPS using Docker Compose MultiContainer setup, CiCd pipeline, Domain, SSL certificate, Monitoring.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {["React","Node.js","TypeScript", "MongoDb", "Docker", "Nginx", "Jenkins","Grafana","ssl" ].map((tech, key)=> (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> 
                            {tech}
                            </span>
               ) )}
            </div>

                <div>
                    <a href="https://www.transfastcorporation.com/" className='text-blue-400 hover:text-blue-300 transition-colors my-4  '> Visit site</a>
                </div>

        </div>





        
    </div>
    </div>
    </RevealOnScroll>
    </section>
  )
}
