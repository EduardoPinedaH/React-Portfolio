import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-15 dark:bg-gray-900">
            <div className="flex justify-end py-5">
                <ul className="flex items-center">
                    <div className="pl-50">
                        <ul className="flex justify-end gap-4">
                            <li className="font-poppins px-2 font-semibold dark:text-slate-100"><a target="_blank" href="https://github.com/EduardoPinedaH">GitHub.</a></li>
                            <li className="font-poppins px-2 font-semibold dark:text-slate-100"><a target="_blank" href="https://www.linkedin.com/in/eduardopinedahu">Linkedin.</a></li>
                            <li className="font-poppins px-2 font-semibold dark:text-slate-100"><a target="_blank" href="#">Slack.</a></li>
                        </ul>
                        <p className="font-poppins px-2 font-semibold dark:text-slate-100">Eduardo Pineda &copy;2023. All Rights Reserved</p>
                    </div>
                </ul>
            </div>
        </footer>
    )
}