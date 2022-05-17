import { useState } from "react";
import { ResourcePage } from "./ResourcePage";

export default function Browser() {

  const [subject, setSubject] = useState<string>("https://atomicdata.dev/agents/QmfpRIBn2JYEatT0MjSkMNoBJzstz19orwnT5oT2rcQ=/");

  return (
    <>
      <label htmlFor="subject">Subject (URL)</label>
      <input
        id="subject"
        style={{ width: "100%" }}
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      {/* By passing an Atomic Data URL (subject) here, we can Render that resource! */}
      <ResourcePage subject={subject} key={subject} />
    </>

  );
}
