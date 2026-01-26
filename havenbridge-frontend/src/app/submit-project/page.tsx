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
  HelpCircle,
} from "lucide-react";

// ──────────────────────────────────────────────
// Helper Components (improved version)
// ──────────────────────────────────────────────

function InputField({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  pattern,
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3.5 rounded-xl border border-gray-300 
          bg-white shadow-sm 
          focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 
          focus:outline-none transition-all duration-200
          placeholder:text-gray-400
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          hover:border-gray-400
        `}
      />
    </div>
  );
}

function InputFieldWithIcon({
  label,
  name,
  type = "text",
  icon,
  required = false,
  placeholder = "",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  icon: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 
            bg-white shadow-sm 
            focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 
            focus:outline-none transition-all duration-200
            placeholder:text-gray-400
            hover:border-gray-400
          `}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  required = false,
  options,
  value,
  onChange,
  placeholder = "Select...",
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3.5 rounded-xl border border-gray-300 
          bg-white shadow-sm 
          focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 
          focus:outline-none transition-all duration-200
          text-gray-900
          hover:border-gray-400
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ProjectIntakeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    relationship: "",

    projectName: "",
    siteAddress: "",
    suburb: "",
    state: "VIC",
    postcode: "",
    councilArea: "",

    landSize: "",
    landSizeUnit: "sqm",
    currentZoning: "",
    planningStatus: "",

    proposedDwellings: "",
    dwellingMix: "",
    developmentType: "",
    projectValueEstimate: "",
    timeline: "",
    fundingStatus: "",

    partnerType: "",
    partnershipModel: "",
    reportingRequirements: "",

    knownConstraints: "",
    additionalInfo: "",

    files: [] as File[],

    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const generateReferenceId = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
    return `HB-${year}-${random}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newReferenceId = generateReferenceId();
    setReferenceId(newReferenceId);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      console.log("Form submitted:", { ...formData, referenceId: newReferenceId });
    }, 1800);
  };

  // Your options arrays remain unchanged
  const relationshipOptions = [
    "Landowner",
    "Property Agent",
    "Community Housing Provider",
    "Government Agency",
    "Developer",
    "Investor",
    "Consultant",
    "Other",
  ];

  const stateOptions = ["VIC", "NSW", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

  const planningStatusOptions = [
    "Pre-feasibility",
    "Feasibility",
    "Pre-planning",
    "Planning Submitted",
    "Planning Approved",
    "Construction Ready",
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
    "Other",
  ];

  const partnerTypeOptions = [
    "Community Housing Provider (CHP)",
    "Government Agency",
    "Financial Sponsor",
    "Delivery Partner",
    "Joint Venture Partner",
    "Capital Partner",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-teal-50/30">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 max-w-5xl lg:max-w-6xl">
      {submitSuccess ? (
  <div className="text-center py-16 md:py-24">
    {/* Checkmark icon at very top */}
    <div className="w-20 h-20 md:w-24 md:h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
      <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-teal-700" />
    </div>

    {/* Main heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-teal-950 mb-4">
      Submission Received
    </h1>

    <p className="text-xl md:text-2xl text-teal-800/90 mb-10 max-w-3xl mx-auto">
      Thank you for sharing your project details with HavenBridge.
    </p>

    {/* === PROMINENT SEND EMAIL BUTTON – NOW AT THE TOP === */}
    <div className="max-w-3xl mx-auto mb-16">
      <p className="text-lg md:text-xl text-teal-800 mb-6 font-medium">
        Click the button below to send your submission via your email client (pre-filled with all details):
      </p>

      <a
        href={`mailto:projects@havenbridge.com.au?subject=${encodeURIComponent(
          `New Project Submission - ${referenceId}`
        )}&body=${encodeURIComponent(
          `Reference ID: ${referenceId}\n\n` +
          `=== Contact Information ===\n` +
          `Name: ${formData.firstName} ${formData.lastName}\n` +
          `Organization: ${formData.organization || "N/A"}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Website: ${formData.website || "Not provided"}\n` +
          `Relationship: ${formData.relationship}\n\n` +
          `=== Site & Project ===\n` +
          `Project Name: ${formData.projectName || "Not provided"}\n` +
          `Address: ${formData.siteAddress}, ${formData.suburb}, ${formData.state} ${formData.postcode}\n` +
          `Council Area: ${formData.councilArea}\n\n` +
          `=== Development Details ===\n` +
          `Land Size: ${formData.landSize || "N/A"} ${formData.landSizeUnit}\n` +
          `Current Zoning: ${formData.currentZoning || "Not provided"}\n` +
          `Planning Status: ${formData.planningStatus}\n` +
          `Proposed Dwellings: ${formData.proposedDwellings || "N/A"}\n` +
          `Development Type: ${formData.developmentType}\n` +
          `Estimated Value: ${formData.projectValueEstimate || "Not specified"}\n` +
          `Timeline: ${formData.timeline || "Not specified"}\n` +
          `Known Constraints: ${formData.knownConstraints || "None mentioned"}\n\n` +
          `=== Partnership & Notes ===\n` +
          `Partner Type Sought: ${formData.partnerType || "N/A"}\n` +
          `Preferred Model: ${formData.partnershipModel || "N/A"}\n` +
          `Additional Notes:\n${formData.additionalInfo || "None provided"}\n\n` +
          `Looking forward to discussing this opportunity.\n\n` +
          `Best regards,\n${formData.firstName} ${formData.lastName}`
        )}`}
        className="inline-flex items-center justify-center gap-4 px-12 py-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl hover:from-teal-700 hover:to-teal-900 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 group"
      >
        <Mail className="w-8 h-8" />
        Send via Email Now
        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
      </a>

      <p className="mt-5 text-base text-teal-700/90">
        This opens your email app with everything ready. Attach files if needed, then hit Send.
      </p>
    </div>

    {/* Reference number box – now below the main action */}
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto border border-teal-100 mb-12">
      <div className="text-center mb-8">
        <div className="inline-block px-8 py-4 bg-teal-900 text-white text-3xl md:text-4xl font-mono font-bold rounded-2xl tracking-wider shadow-inner">
          {referenceId}
        </div>
        <p className="text-lg text-teal-800 font-medium mt-4">
          Your reference number – save this!
        </p>
      </div>

      <div className="space-y-8 text-left">
        <div className="p-6 bg-teal-50/70 rounded-2xl border border-teal-100">
          <h3 className="font-semibold text-teal-900 mb-4 text-lg">What happens next?</h3>
          <ul className="space-y-3 text-teal-800">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Send the email above to officially submit your details</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Our team will review within 24–48 business hours</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>We'll contact you directly to discuss next steps</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-100">
          <h3 className="font-semibold text-amber-900 mb-3 text-lg">Important</h3>
          <p className="text-amber-900/90">
            Quote <strong className="font-bold text-teal-800">{referenceId}</strong> in all future communications.
          </p>
        </div>
      </div>
    </div>

    {/* Final navigation buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a
        href="/"
        className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-teal-700 text-white rounded-xl hover:bg-teal-800 transition-colors shadow-lg hover:shadow-xl"
      >
        Return to Home
      </a>
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-teal-700 border-2 border-teal-600 rounded-xl hover:bg-teal-50 transition-colors"
      >
        Contact Us Directly
      </a>
    </div>
  </div>
       ) : (
          <>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-950 mb-5">
                Project / Site Submission
              </h1>
              <p className="text-xl md:text-2xl text-teal-800/90 max-w-3xl mx-auto leading-relaxed">
                Share your project in minutes. All submissions are handled confidentially.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-base text-teal-700/90">
                <div className="flex items-center gap-2.5 bg-white/70 px-5 py-2.5 rounded-full shadow-sm">
                  <Shield className="w-5 h-5" />
                  <span>Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/70 px-5 py-2.5 rounded-full shadow-sm">
                  <Calendar className="w-5 h-5" />
                  <span>Response within 48 hours</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/70 px-5 py-2.5 rounded-full shadow-sm">
                  <FileText className="w-5 h-5" />
                  <span>Auto-generated reference</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-14 md:space-y-16">
              {/* Contact Information */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 md:p-10 shadow-xl border border-teal-100/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <Users className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-950">Contact Details</h2>
                    <p className="text-teal-800/80 mt-1">Who we should reach out to</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="firstName"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    required
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputField
                    label="Organization"
                    name="organization"
                    required
                    placeholder="Company or Entity Name"
                    value={formData.organization}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <SelectField
                    label="Relationship to Site"
                    name="relationship"
                    required
                    options={relationshipOptions}
                    value={formData.relationship}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputFieldWithIcon
                    label="Email"
                    name="email"
                    type="email"
                    icon={<Mail className="w-5 h-5" />}
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputFieldWithIcon
                    label="Phone"
                    name="phone"
                    type="tel"
                    icon={<Phone className="w-5 h-5" />}
                    required
                    placeholder="04XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <div className="md:col-span-2">
                    <InputFieldWithIcon
                      label="Website (optional)"
                      name="website"
                      type="url"
                      icon={<Globe className="w-5 h-5" />}
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange(e as any)}
                    />
                  </div>
                </div>
              </div>

              {/* Site & Project Information */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 md:p-10 shadow-xl border border-teal-100/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-950">Site & Project Information</h2>
                    <p className="text-teal-800/80 mt-1">Core details about the location and proposal</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <InputField
                      label="Project Name (optional)"
                      name="projectName"
                      placeholder="e.g. Meadowbrook Residences"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange(e as any)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <InputField
                      label="Site Address"
                      name="siteAddress"
                      required
                      placeholder="123 Example Street"
                      value={formData.siteAddress}
                      onChange={(e) => handleInputChange(e as any)}
                    />
                  </div>
                  <InputField
                    label="Suburb"
                    name="suburb"
                    required
                    placeholder="Richmond"
                    value={formData.suburb}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <SelectField
                    label="State"
                    name="state"
                    required
                    options={stateOptions}
                    value={formData.state}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputField
                    label="Postcode"
                    name="postcode"
                    required
                    pattern="[0-9]{4}"
                    placeholder="3121"
                    value={formData.postcode}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                  <InputField
                    label="Local Council Area"
                    name="councilArea"
                    required
                    placeholder="City of Yarra"
                    value={formData.councilArea}
                    onChange={(e) => handleInputChange(e as any)}
                  />
                </div>
              </div>

              {/* Development Details */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 md:p-10 shadow-xl border border-teal-100/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <Building className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-950">Development Details</h2>
                    <p className="text-teal-800/80 mt-1">What you're planning to build</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3 items-end">
                    <div className="flex-1">
                      <InputField
                        label="Land Size"
                        name="landSize"
                        type="number"
                        required
                        placeholder="e.g. 1200"
                        value={formData.landSize}
                        onChange={(e) => handleInputChange(e as any)}
                      />
                    </div>
                    <div className="w-28">
                      <SelectField
                        label="Unit"
                        name="landSizeUnit"
                        options={["sqm", "hectares", "acres"]}
                        value={formData.landSizeUnit}
                        onChange={(e) => handleInputChange(e as any)}
                      />
                    </div>
                  </div>

                  <InputField
                    label="Current Zoning"
                    name="currentZoning"
                    placeholder="Residential 1 Zone"
                    value={formData.currentZoning}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <SelectField
                    label="Planning Status"
                    name="planningStatus"
                    required
                    options={planningStatusOptions}
                    value={formData.planningStatus}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <InputField
                    label="Proposed Dwellings"
                    name="proposedDwellings"
                    type="number"
                    placeholder="e.g. 36"
                    value={formData.proposedDwellings}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <SelectField
                    label="Development Type"
                    name="developmentType"
                    required
                    options={developmentTypeOptions}
                    value={formData.developmentType}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <InputFieldWithIcon
                    label="Est. Project Value"
                    name="projectValueEstimate"
                    icon={<DollarSign className="w-5 h-5" />}
                    placeholder="$8M – $15M"
                    value={formData.projectValueEstimate}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <div className="md:col-span-2">
                    <InputField
                      label="Desired Timeline"
                      name="timeline"
                      placeholder="e.g. Start Q2 2026, 18–24 months"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange(e as any)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2.5">
                      Known Constraints
                    </label>
                    <textarea
                      name="knownConstraints"
                      value={formData.knownConstraints}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, knownConstraints: e.target.value }))
                      }
                      rows={3}
                      placeholder="Heritage listing, flood zone, limited access, etc."
                      className={`
                        w-full px-4 py-3.5 rounded-xl border border-gray-300 
                        bg-white shadow-sm resize-y min-h-[100px]
                        focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 
                        focus:outline-none transition-all duration-200
                        placeholder:text-gray-400 hover:border-gray-400
                      `}
                    />
                  </div>
                </div>
              </div>

              {/* Partnership & Intent */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 md:p-10 shadow-xl border border-teal-100/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <Briefcase className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-950">Partnership & Intent</h2>
                    <p className="text-teal-800/80 mt-1">What kind of collaboration are you seeking?</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField
                    label="Partner Type Sought"
                    name="partnerType"
                    options={partnerTypeOptions}
                    value={formData.partnerType}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <InputField
                    label="Preferred Model"
                    name="partnershipModel"
                    placeholder="Joint Venture, Dev Management, etc."
                    value={formData.partnershipModel}
                    onChange={(e) => handleInputChange(e as any)}
                  />

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2.5">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))
                      }
                      rows={4}
                      placeholder="Any other context, goals, or requirements..."
                      className={`
                        w-full px-4 py-3.5 rounded-xl border border-gray-300 
                        bg-white shadow-sm resize-y min-h-[120px]
                        focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 
                        focus:outline-none transition-all duration-200
                        placeholder:text-gray-400 hover:border-gray-400
                      `}
                    />
                  </div>
                </div>
              </div>

              {/* File Upload – unchanged, already nice */}
              {/* ... keep your existing file upload section ... */}

              {/* Consent & Submit */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 md:p-10 shadow-xl border border-teal-100/60">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))}
                      className="mt-1.5 w-5 h-5 text-teal-600 rounded border-teal-300 focus:ring-teal-500"
                    />
                    <label htmlFor="agreeToTerms" className="text-base text-gray-700 leading-relaxed">
                      I confirm that the information provided is accurate and I have authority to submit this proposal.
                    </label>
                  </div>

                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      required
                      checked={formData.agreeToPrivacy}
                      onChange={(e) => setFormData((prev) => ({ ...prev, agreeToPrivacy: e.target.checked }))}
                      className="mt-1.5 w-5 h-5 text-teal-600 rounded border-teal-300 focus:ring-teal-500"
                    />
                    <label htmlFor="agreeToPrivacy" className="text-base text-gray-700 leading-relaxed">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-teal-700 hover:underline font-medium">
                        Privacy Policy
                      </a>{" "}
                      and understand how my data will be used.
                    </label>
                  </div>

                  <div className="pt-8 border-t border-teal-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full py-5 px-10 text-xl font-semibold 
                        bg-gradient-to-r from-teal-600 to-teal-800 
                        text-white rounded-2xl shadow-xl 
                        hover:shadow-2xl hover:from-teal-700 hover:to-teal-900 
                        transition-all duration-300 
                        disabled:opacity-60 disabled:cursor-not-allowed 
                        flex items-center justify-center gap-3 group
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Project
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="mt-5 text-center text-sm text-gray-600">
                      You will receive an automatic confirmation with your reference number.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}