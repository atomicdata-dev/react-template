import { useCurrentAgent } from "@tomic/react";
import { createContext, useState, useMemo } from "react";
import { ResourcePage } from "./ResourcePage";

/** We create a React Context which allows us to access and set the subject anywhere in the app */
export const AppContext = createContext({
  subject: '',
  setSubject: (subject: string) => {}
});

export default function Browser() {
  const [agent] = useCurrentAgent();

  const [subject, setSubject] = useState<string>(agent?.subject || "");
  const contextSubjectHook = useMemo(() => ({ subject, setSubject }), [
    subject
  ]);

  return (
    <AppContext.Provider value={contextSubjectHook}>
      <input
        id="subject"
        style={{ width: "100%" }}
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      {/* By passing an Atomic Data URL (subject) here, we can Render that resource! */}
      <ResourcePage subject={subject} key={subject} />
    </AppContext.Provider>

  );
}
