"use client";

import { useState } from "react";

const resumeFileId = "1zvCfpA4jQU7UgGk3iPni7X1pr9T3nl-L";
const resumePreviewUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`;
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

export default function Resume(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="resume" className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-5 text-4xl font-bold text-white lg:text-5xl">
          Resume
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          View my latest resume or download a copy for your reference.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-purple-500/15 px-5 py-3 text-sm font-medium text-purple-100 transition-colors hover:bg-purple-500/30"
          >
            View resume
          </button>
          <a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-purple-400/50 hover:text-purple-200"
          >
            Download resume
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#110720] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <h3 id="resume-modal-title" className="font-semibold text-white">
                Deepankar Singh Resume
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full px-3 py-1 text-xl text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close resume preview"
              >
                x
              </button>
            </div>
            <iframe
              src={resumePreviewUrl}
              title="Deepankar Singh resume preview"
              className="h-[calc(100%-57px)] w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
