import React from "react";
import InputGroup from "components/InputGroup";
interface IFormValues {
  date?: string | Date | undefined;
  pdf: File | Blob | undefined;
  submissionError?: boolean | undefined;
  [key: string]: string | Blob | Date | boolean | null | undefined;
}
export default function CreateArchivePage() {
  const [archiveValues, setArchiveValues] = React.useState({} as IFormValues);
  const [loading, setLoading] = React.useState(false);

  const handleArchiveData = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;
    if (target != null) {
      //Images have to be handled differently than regular input fields.
      if (target.name == "pdf" && target.files != null) {
        setArchiveValues(archiveValues => ({
          ...archiveValues,
          [target.name]: target.files?.item(0),
        }));
      } else {
        setArchiveValues(archiveValues => ({
          ...archiveValues,
          [target.name]: target.value,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //If there's currently a submission error, we remove it so we can try another attempt.
    if (archiveValues.submissionError) {
      setArchiveValues({ ...archiveValues, ["submissionError"]: false });
    }

    const fd = new FormData();
    let key: string;
    setLoading(true);
    for (key in archiveValues) {
      if (typeof archiveValues[key] === "string") {
        fd.append(key, archiveValues[key] as string);
      } else {
        fd.append(key, archiveValues[key] as Blob);
      }
    }
    const response = await fetch("/api/admin/archives/create", {
      method: "POST",
      body: fd,
    });
    if (response.status === 200) {
      setLoading(false);
      window.location.reload();
    } else {
      setArchiveValues({ ...archiveValues, ["submissionError"]: true });
    }
  };

  return (
    <div>
      <InputGroup
        inputType="date"
        inputName="date"
        inputPlaceholder="mm-dd-yyyy"
        labelText="Paper Date"
        value={archiveValues.date}
        handleChange={handleArchiveData}
      />
      <InputGroup
        inputType="file"
        inputName="pdf"
        inputPlaceholder="Paper PDF"
        labelText="Paper PDF"
        value={archiveValues.pdf}
        handleChange={handleArchiveData}
      />
      <button type="submit" onClick={handleSubmit} className="button">
        Add to Archives
      </button>
    </div>
  );
}
