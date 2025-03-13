import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Document, Page, Text, View, PDFDownloadLink } from "@react-pdf/renderer";

const ResumePDF = ({ data }) => (
  <Document>
    <Page size="A4">
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.name}</Text>
        <Text style={{ fontSize: 14 }}>{data.email}</Text>
        <Text style={{ fontSize: 14 }}>{data.phone}</Text>
        <Text style={{ marginTop: 10 }}>{data.summary}</Text>
      </View>
    </Page>
  </Document>
);

const ResumeBuilder = () => {
  const { register, handleSubmit } = useForm();
  const [resumeData, setResumeData] = useState(null);

  const onSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3">
        <input {...register("name")} placeholder="Full Name" className="w-full p-2 bg-gray-800 rounded" />
        <input {...register("email")} placeholder="Email" className="w-full p-2 bg-gray-800 rounded" />
        <input {...register("phone")} placeholder="Phone" className="w-full p-2 bg-gray-800 rounded" />
        <textarea {...register("summary")} placeholder="Summary" className="w-full p-2 bg-gray-800 rounded" />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded w-full">Generate Resume</button>
      </form>

      {resumeData && (
        <PDFDownloadLink document={<ResumePDF data={resumeData} />} fileName="resume.pdf">
          {({ loading }) => loading ? "Generating..." : <button className="mt-4 bg-green-500 px-4 py-2 rounded">Download PDF</button>}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default ResumeBuilder;
