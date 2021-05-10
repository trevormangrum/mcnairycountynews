import React from "react";
import queries from "server/actions/Contentful/queries";
import { client } from "server/actions/Contentful";
import { useQuery } from "@apollo/client";
import InputGroup from "components/InputGroup";
export default function CreateArchivePage() {
  return (
    <div>
      <InputGroup
        inputType="date"
        inputName="date"
        inputPlaceholder="mm-dd-yyyy"
        labelText="Paper Date"
      />
      <InputGroup
        inputType="file"
        inputName="pdf"
        inputPlaceholder="Paper PDF"
        labelText="Paper PDF"
      />
      <button type="submit" className="button">
        Add to Archives
      </button>
    </div>
  );
}
