"use client";
import { FiFileText, FiInfo, FiShield } from "react-icons/fi";
import { FiThumbsUp, FiHelpCircle } from "react-icons/fi"

export default function PrivacyPolicyPage() {
    return (
        <section className="relative  px-4 sm:px-6 bg-white text-gray-800">
            {/* Decorative Watermarks */}
            <div
                className="absolute top-[10%] right-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/watermark/Vector-2.png')",
                    backgroundSize: "100px",
                }}
            ></div>
            <div
                className="absolute top-[23%] left-1/3 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-50 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/watermark/Vector-3.png')",
                    backgroundSize: "100px",
                }}
            ></div>
            <div
                className="absolute left-0 top-[55%] w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/watermark/Vector-2.png')",
                    backgroundSize: "75px",
                }}
            ></div>
            <div
                className="absolute w-24 top-1/2 left-1/2 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/watermark/Vector-2.png')",
                    backgroundSize: "75px",
                }}
            ></div>

            <div className="container relative z-10  mx-auto">
                <h1 className="text-4xl font-bold text-center py-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 text-center mb-10">
                    Last Updated: April 24, 2025
                </p>

                <p className="mb-4">
                    At AI Content Creator, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
                <p className="mb-6">
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our platform. By using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>

                <h3 className="text-lg font-semibold mb-2">1.1 Personal Information</h3>
                <p className="mb-2">
                    We collect personal information that you voluntarily provide to us when you register for our platform, express interest in obtaining information about us or our products and services, or otherwise contact us. The personal information we collect may include:
                </p>
                <ul className="list-disc ml-6 mb-4 text-md text-gray-500">
                    <li>Name, email address, and contact details</li>
                    <li>Billing information and payment details</li>
                    <li>Account credentials (username and password)</li>
                    <li>Profile information (profile picture, job title, company)</li>
                    <li>User preferences and settings</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">1.2 Usage Information</h3>
                <p className="mb-2">
                    We automatically collect certain information when you visit, use, or navigate our platform. This information does not reveal your specific identity but may include:
                </p>
                <ul className="list-disc ml-6 mb-4 text-md text-gray-500">
                    <li>Device and browser information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and interactions (pages visited, features used, time spent)</li>
                    <li>Content generated or uploaded to our platform</li>
                    <li>Performance metrics and error data</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">1.3 Information from Third Parties</h3>
                <p className="mb-2">We may collect information about you from third-party sources, such as:</p>
                <ul className="list-disc ml-6 mb-8 text-md text-gray-500">
                    <li>Social media platforms (if you connect your account)</li>
                    <li>Integration partners (when you use third-party integrations)</li>
                    <li>Payment processors and business partners</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">2. Data Usage</h2>

                <h3 className="text-lg font-semibold mb-2">2.1 Business Purposes</h3>
                <p className="mb-2">
                    We use your information for various business purposes, including:
                </p>
                <ul className="list-disc ml-6 mb-4 text-md text-gray-500">
                    <li>Providing and maintaining our platform services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Responding to inquiries and providing customer support</li>
                    <li>Sending administrative information and service updates</li>
                    <li>Improving and personalizing user experience</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">2.2 Marketing and Communications</h3>
                <p className="mb-2">
                    With your consent, we may use your information for marketing purposes, such as:
                </p>
                <ul className="list-disc ml-6 mb-2 text-md text-gray-500">
                    <li>Sending promotional emails about new features, special offers, or other information</li>
                    <li>Delivering targeted advertising based on your preferences and interactions</li>
                    <li>Conducting surveys and collecting feedback</li>
                </ul>
                <p className="mb-4 text-md text-gray-500">
                    You can opt out of marketing communications at any time by following the unsubscribe instructions included in our emails or by contacting us directly.
                </p>

                <h3 className="text-lg font-semibold mb-2">2.3 AI Training and Improvement</h3>
                <p className="mb-4 text-md text-gray-500">
                    Unless you opt out, we may use content generated through our platform to train and improve our AI models. This helps us enhance the quality and accuracy of our services. All training data is anonymized and aggregated to protect your privacy.
                </p>

                <h3 className="text-lg font-semibold mb-2">2.4 Legal Compliance</h3>
                <p className="mb-10 text-md text-gray-500">
                    We may process your information to comply with applicable laws, regulations, legal processes, or governmental requests, as well as to enforce our Terms of Service and protect against potential abuse or illegal activities.
                </p>

                <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Related Documents</h3>
                    <div className="flex flex-wrap gap-4">
                        {/* Terms of Service */}
                        <a
                            href="/terms"
                            className="flex items-center gap-3 bg-green-50 text-gray-800 px-4 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-green-100 transition"
                        >
                            <div className="p-2 rounded-full bg-green-200 text-green-800">
                                <FiFileText className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Terms of Service</span>
                                <p className="text-xs text-gray-500">Rules governing the use of our platform</p>
                            </div>
                        </a>

                        {/* Cookie Policy */}
                        <a
                            href="/cookie-policy"
                            className="flex items-center gap-3 bg-yellow-50 text-gray-800 px-4 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-yellow-100 transition"
                        >
                            <div className="p-2 rounded-full bg-yellow-200 text-yellow-800">
                                <FiInfo className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Cookie Policy</span>
                                <p className="text-xs text-gray-500">Detailed information about cookie usage</p>
                            </div>
                        </a>

                        {/* GDPR Compliance */}
                        <a
                            href="/gdpr-compliance"
                            className="flex items-center gap-3 bg-purple-50 text-gray-800 px-4 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-purple-100 transition"
                        >
                            <div className="p-2 rounded-full bg-purple-200 text-purple-800">
                                <FiShield className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">GDPR Compliance</span>
                                <p className="text-xs text-gray-500">Our approach to EU data protection</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Was this helpful? */}
                <div className="mt-10 border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Was this helpful?</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium px-4 py-2 rounded-md text-sm transition">
                            <FiThumbsUp className="w-4 h-4" />
                            Yes, it was helpful
                        </button>
                        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md text-sm transition">
                            <FiHelpCircle className="w-4 h-4" />
                            No, I need more info
                        </button>
                    </div>
                </div>

                {/* Still have questions */}
                <div className="mt-10 mb-16 bg-gray-50 border rounded-md p-6">
                    <h4 className="text-lg font-semibold mb-2">Still have questions about our Privacy Policy?</h4>
                    <p className="text-gray-600">
                        Our support team is here to help with any questions or concerns.
                    </p>
                </div>
            </div>
        </section>
    );
}
