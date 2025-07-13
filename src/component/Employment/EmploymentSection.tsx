import React from 'react'
import EmploymentDetailsCard from './EmploymentDetailsCard'

const employment = [
    {
        company: "MicrocosmWorks LLP.",
        place: "New Delhi, India",
        from: "2025-02-01T00:00:00.000Z",
        to: null,
        isCurrent: true,
        tasks: [
            "Promoted from Software Intern to Associate Developer based on exceptional performance and contributions.",
            "Developed and deployed 20+ production-ready mobile screens using React Native for a client-facing health app.",
            "Implemented push notifications using the Expo push notifications service for real-time user engagement.",
            "Connected and processed Android health data using the Health Connect API, improving app personalization.",
            "Created graphs for various user datasets to show personalized analytics in React Native.",
            "Developed and integrated scalable admin analytics using Nest.js, React.js, and React Query to monitor key user metrics."
        ]
    },
    {
        company: "Revolute Ed-tech Pvt Ltd.",
        place: "Remote",
        from: "2024-10-01T00:00:00.000Z",
        to: "2024-11-01T00:00:00.000Z",
        isCurrent: false,
        tasks: [
            "Built multiple pages using React Native, delivering an intuitive and smooth mobile experience.",
            "Enhanced the UI for various screens, using custom hooks, the Redux Toolkit for state management, and reusable components.",
            "Resolved UI and navigation issues, ensuring smooth interactions and seamless app flow.",
            "Implemented TypeScript interfaces to ensure strong typing, boosting code reliability and maintainability."
        ]
    }
];


const Education = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Careers</h2>
            <div className="pt-10">
                {
                    employment.map((desc, index) => (
                        <EmploymentDetailsCard desc={desc} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Education