"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

import { 
  ArrowRight, 
  Upload, 
  CheckCircle, 
  MapPin, 
  Building, 
  Calendar, 
  FileText, 
  Home,
  DollarSign,
  Users,
  Shield,
  Mail,
  Phone,
  Globe,
  Briefcase,
  HelpCircle
} from "lucide-react";

export default function ProjectIntakeForm() {
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    relationship: "",
    
    // Project Details
    projectName: "",
    siteAddress: "",
    suburb: "",
    state: "VIC",
    postcode: "",
    councilArea: "",
    
    // Land Information
    landSize: "",
    landSizeUnit: "sqm",
    currentZoning: "",
    planningStatus: "",
    
    // Development Details
    proposedDwellings: "",
    dwellingMix: "",
    developmentType: "",
    projectValueEstimate: "",
    timeline: "",
    fundingStatus: "",
    
    // Partnership Details
    partnerType: "",
    partnershipModel: "",
    reportingRequirements: "",
    
    // Additional Information
    knownConstraints: "",
    additionalInfo: "",
    
    // Files
    files: [] as File[],
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const generateReferenceId = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `HB-${year}-${random}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate reference ID
    const newReferenceId = generateReferenceId();
    setReferenceId(newReferenceId);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Here you would typically send to your backend
      console.log('Form submitted:', { ...formData, referenceId: newReferenceId });
    }, 2000);
  };

  const relationshipOptions = [
    "Landowner",
    "Property Agent",
    "Community Housing Provider",
    "Government Agency",
    "Developer",
    "Investor",
    "Consultant",
    "Other"
  ];

  const stateOptions = ["VIC", "NSW", "QLD", "WA", "SA", "TAS", "ACT", "NT"];
  
  const planningStatusOptions = [
    "Pre-feasibility",
    "Feasibility",
    "Pre-planning",
    "Planning Submitted",
    "Planning Approved",
    "Construction Ready"
  ];

  const developmentTypeOptions = [
    "Social Housing",
    "Affordable Housing",
    "Specialist Disability Accommodation (SDA)",
    "Aged Care",
    "Mixed-Use Development",
    "Community Facility",
    "Modular Construction",
    "Traditional Construction",
    "Other"
  ];

  const partnerTypeOptions = [
    "Community Housing Provider (CHP)",
    "Government Agency",
    "Financial Sponsor",
    "Delivery Partner",
    "Joint Venture Partner",
    "Capital Partner",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {submitSuccess ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Thank You for Your Submission
            </h1>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto mb-8">
              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {referenceId}
                </div>
                <p className="text-lg text-slate-600">
                  Your reference number has been generated
                </p>
              </div>
              
              <div className="space-y-6 text-left">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-2">What happens next?</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You'll receive a confirmation email with your reference number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Our team will review your submission within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>We'll contact you to discuss next steps and potential partnership</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-xl">
                  <h3 className="font-semibold text-amber-800 mb-2">Keep this information handy</h3>
                  <p className="text-slate-700">
                    Please quote your reference number <strong className="text-blue-600">{referenceId}</strong> in all future communications regarding this project.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Project Intake Form
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Submit your site or project details in minutes. All information is treated with strict confidentiality.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Reference ID generated</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section 1: Contact Information */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
                    <p className="text-slate-600">Primary contact for this project</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Relationship to Site/Project *
                    </label>
                    <select
                      name="relationship"
                      required
                      value={formData.relationship}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select your role</option>
                      {relationshipOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Website (Optional)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Project Details</h2>
                    <p className="text-slate-600">Information about the site and development</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., Riverside Apartments"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Site Address *
                    </label>
                    <input
                      type="text"
                      name="siteAddress"
                      required
                      value={formData.siteAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Street number and name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Suburb *
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      required
                      value={formData.suburb}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Suburb name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      State *
                    </label>
                    <select
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      {stateOptions.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      pattern="[0-9]{4}"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="3000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Local Council Area *
                    </label>
                    <input
                      type="text"
                      name="councilArea"
                      required
                      value={formData.councilArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., City of Melbourne"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Development Information */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Development Information</h2>
                    <p className="text-slate-600">Details about the proposed development</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Land Size *
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        name="landSize"
                        required
                        value={formData.landSize}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="e.g., 1000"
                      />
                      <select
                        name="landSizeUnit"
                        value={formData.landSizeUnit}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="sqm">m²</option>
                        <option value="hectares">Hectares</option>
                        <option value="acres">Acres</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Zoning
                    </label>
                    <input
                      type="text"
                      name="currentZoning"
                      value={formData.currentZoning}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., Residential Zone 1"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Planning Status *
                    </label>
                    <select
                      name="planningStatus"
                      required
                      value={formData.planningStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select status</option>
                      {planningStatusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Proposed Number of Dwellings
                    </label>
                    <input
                      type="number"
                      name="proposedDwellings"
                      value={formData.proposedDwellings}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., 24"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Development Type *
                    </label>
                    <select
                      name="developmentType"
                      required
                      value={formData.developmentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select type</option>
                      {developmentTypeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Project Value
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="projectValueEstimate"
                        value={formData.projectValueEstimate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="e.g., $5M - $10M"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., Q3 2025 commencement, 18-month delivery"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Known Constraints or Challenges
                    </label>
                    <textarea
                      name="knownConstraints"
                      value={formData.knownConstraints}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., Heritage overlay, contamination, access limitations"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Partnership Information */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Partnership Information</h2>
                    <p className="text-slate-600">Tell us about your partnership needs</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Type of Partner Sought
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select partner type</option>
                      {partnerTypeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Partnership Model
                    </label>
                    <input
                      type="text"
                      name="partnershipModel"
                      value={formData.partnershipModel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="e.g., Joint Venture, Development Management"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Any other information about your project or partnership requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: File Upload */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Supporting Documents</h2>
                    <p className="text-slate-600">Upload relevant files (optional)</p>
                  </div>
                </div>

                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg,.dxf"
                    />
                    <div className="text-slate-700 mb-2">
                      <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                    </div>
                    <p className="text-sm text-slate-500">
                      PDF, DOC, JPG, PNG, DWG (Max 10MB each)
                    </p>
                  </label>
                  {formData.files.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-medium text-slate-700 mb-2">
                        Selected files ({formData.files.length}):
                      </p>
                      <div className="space-y-2">
                        {formData.files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                            <span className="text-sm text-slate-600 truncate">{file.name}</span>
                            <span className="text-xs text-slate-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 text-sm text-slate-500">
                  <p>Suggested documents: Site plans, zoning certificates, feasibility studies, concept designs, council correspondence</p>
                </div>
              </div>

              {/* Section 6: Terms and Submission */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                      className="mt-1 w-5 h-5 text-blue-600 rounded"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-slate-700">
                      I confirm that I have the authority to submit this information and that all details provided are accurate to the best of my knowledge.
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      required
                      checked={formData.agreeToPrivacy}
                      onChange={(e) => setFormData(prev => ({ ...prev, agreeToPrivacy: e.target.checked }))}
                      className="mt-1 w-5 h-5 text-blue-600 rounded"
                    />
                    <label htmlFor="agreeToPrivacy" className="text-sm text-slate-700">
                      I have read and agree to the{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>{" "}
                      and understand how my information will be used.
                    </label>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-3">
                          Submit Project Details <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <p className="mt-4 text-sm text-slate-500">
                      By submitting this form, you agree to receive communication from HavenBridge Developments regarding your project inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            {/* Help Section */}
            <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Need help with your submission?</h3>
                  <p className="text-slate-600 mb-4">
                    If you're unsure about any details or have questions about the form, our team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:projects@havenbridge.com.au"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      projects@havenbridge.com.au
                    </a>
                    <a
                      href="tel:+61399999999"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      (03) 9999 9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}