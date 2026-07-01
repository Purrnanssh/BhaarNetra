"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { TruckGlyph } from "./TruckGlyph";

const truckProfiles = [
  {
    id: "rigid",
    label: "3-axle rigid",
    plate: "HR 55 AB 2481",
    legal: 28,
    defaultWeight: 34,
    classCode: "N3-RIGID-3A",
  },
  {
    id: "articulated",
    label: "5-axle articulated",
    plate: "RJ 14 GK 7712",
    legal: 40,
    defaultWeight: 47,
    classCode: "N3-ARTIC-5A",
  },
  {
    id: "compliant",
    label: "4-axle compliant",
    plate: "MH 12 QX 1904",
    legal: 35,
    defaultWeight: 33,
    classCode: "N3-RIGID-4A",
  },
] as const;

const fullPipeline = [
  ["ANPR", "Plate read at 98.7% confidence"],
  ["CLASS", "Vehicle silhouette/axles classified"],
  ["TIER 1", "Screening weight captured"],
  ["DECISION", "Screening rule applied (Flagged/Pass)"],
  ["TIER 2", "Certified Legal Metrology weight recorded"],
  ["IDENTITY", "VAHAN / FASTag resolved via secure rail"],
  ["PENALTY", "Penalty rule computed against certified weight"],
  ["EVIDENCE", "Cryptographic sealing initiated"],
] as const;

type RunState = "idle" | "running" | "complete" | "clear";

export function LiveDemo({ expanded = false }: { expanded?: boolean }) {
  const [profileId, setProfileId] = useState<(typeof truckProfiles)[number]["id"]>(
    "rigid",
  );
  const profile = truckProfiles.find((item) => item.id === profileId)!;
  const [weight, setWeight] = useState<number>(profile.defaultWeight);
  const [step, setStep] = useState(-1);
  const [runState, setRunState] = useState<RunState>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWeight(profile.defaultWeight);
    setStep(-1);
    setRunState("idle");
  }, [profile]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const overloadTonnes = Math.max(0, weight - profile.legal);
  const overloadPct = (overloadTonnes / profile.legal) * 100;
  const flagged = weight > profile.legal;
  const demoPenalty = Math.round(overloadTonnes * 2000);
  const certifiedWeight = flagged ? Math.max(weight - 0.2, 0) : weight;
  
  const timestamp = useMemo(() => new Date().toISOString().replace('T', ' ').slice(0, 19) + 'Z', []);
  
  const evidenceHash = useMemo(
    () =>
      `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b${Math.round(certifiedWeight * 100).toString(16).padStart(2, '0')}`,
    [certifiedWeight],
  );

  const run = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStep(-1);
    setRunState("running");

    const finalStep = flagged ? fullPipeline.length - 1 : 3;
    for (let index = 0; index <= finalStep; index += 1) {
      timers.current.push(
        setTimeout(() => {
          setStep(index);
          if (index === finalStep) {
            setRunState(flagged ? "complete" : "clear");
          }
        }, 550 * (index + 1)),
      );
    }
  };

  return (
    <div className={`live-demo ${expanded ? "live-demo--expanded" : ""}`}>
      <div className="live-demo__controls">
        <div className="live-demo__control-head">
          <span className="status-chip status-chip--sample mono">
            INTERACTIVE SAMPLE
          </span>
          <span className="mono">MVP PIPELINE · LOCAL DEMONSTRATION</span>
        </div>
        <fieldset>
          <legend className="mono">01 · SELECT VEHICLE</legend>
          <div className="live-demo__vehicle-options">
            {truckProfiles.map((item) => (
              <button
                key={item.id}
                type="button"
                className={profileId === item.id ? "is-active" : ""}
                onClick={() => setProfileId(item.id)}
              >
                <TruckGlyph
                  overloaded={item.defaultWeight > item.legal}
                  className="live-demo__option-truck"
                />
                <span>{item.label}</span>
                <small className="mono">{item.plate}</small>
              </button>
            ))}
          </div>
        </fieldset>
        <label className="live-demo__weight">
          <span>
            <span className="mono">02 · SET SCREENING WEIGHT</span>
            <strong>
              {weight.toFixed(1)} <small>TONNES</small>
            </strong>
          </span>
          <input
            type="range"
            min={Math.max(10, profile.legal - 8)}
            max={profile.legal + 18}
            step="0.5"
            value={weight}
            onChange={(event) => {
              setWeight(Number(event.target.value));
              setStep(-1);
              setRunState("idle");
            }}
          />
          <div className="live-demo__range-labels mono">
            <span>{profile.legal - 8}T</span>
            <span>LEGAL GVW · {profile.legal}T</span>
            <span>{profile.legal + 18}T</span>
          </div>
        </label>
        <button
          className="action-button"
          type="button"
          onClick={run}
          disabled={runState === "running"}
        >
          <span>{runState === "running" ? "Processing transit" : "Run vehicle through pipeline"}</span>
          <i aria-hidden="true">→</i>
        </button>
        <p className="live-demo__rule-note mono">
          PENALTY DISPLAY USES AN EXPLICIT DEMO RULE: ₹2,000 PER EXCESS TONNE.
          IT IS NOT PRESENTED AS A CURRENT STATUTORY RATE.
        </p>
      </div>

      <div className="live-demo__instrument">
        <div className="live-demo__instrument-bar mono">
          <span>BN-NODE / NH-48 / LANE-02</span>
          <span className={runState === "running" ? "is-processing" : ""}>
            {runState === "running" ? "PROCESSING" : "NODE READY"}
          </span>
        </div>

        <div className="live-demo__camera">
          <div className={`live-demo__reticle ${step === 0 ? "is-scanning" : ""}`} aria-hidden="true" />
          <TruckGlyph
            className={`live-demo__camera-truck ${flagged ? "is-overloaded" : ""}`}
            overloaded={flagged}
          />
          <div className="live-demo__camera-data mono">
            <span className={step >= 0 ? "is-populated" : ""}>PLATE · {step >= 0 ? profile.plate : "AWAITING"}</span>
            <span className={step >= 1 ? "is-populated" : ""}>CLASS · {step >= 1 ? profile.classCode : "AWAITING"}</span>
            <span className={step >= 2 ? "is-populated" : ""}>SCREEN WT · {step >= 2 ? `${weight.toFixed(1)}T` : "AWAITING"}</span>
            <span className={step >= 4 ? "is-populated" : ""}>CERT WT · {step >= 4 ? `${certifiedWeight.toFixed(1)}T` : "AWAITING"}</span>
          </div>
        </div>

        <ol className="live-demo__pipeline" aria-label="Pipeline state">
          {fullPipeline.map(([label, description], index) => {
            const active = index === step;
            const complete = index < step || (index === step && runState !== "running");
            const skipped = !flagged && index > 3 && runState === "clear";
            return (
              <li
                key={label}
                className={`${active ? "is-active" : ""} ${complete ? "is-complete" : ""} ${skipped ? "is-skipped" : ""}`}
              >
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong className="premium-label">{label}</strong>
                  <small>{skipped ? "Not required" : description}</small>
                </div>
                <i aria-hidden="true" />
              </li>
            );
          })}
        </ol>

        <AnimatePresence mode="wait">
          <motion.div
            key={runState}
            className={`live-demo__result live-demo__result--${runState}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {runState === "idle" && (
              <div className="live-demo__result-state">
                <span className="mono">AWAITING TRANSIT</span>
                <strong>Configure the vehicle, then run the pipeline.</strong>
              </div>
            )}
            {runState === "running" && (
              <div className="live-demo__result-state is-running">
                <span className="mono">EVENT STREAM ACTIVE</span>
                <strong>
                  {step >= 0 ? fullPipeline[step][1] : "Synchronising roadside signals"}
                </strong>
              </div>
            )}
            {runState === "clear" && (
              <div className="live-demo__result-state is-clear">
                <span className="mono status-chip status-chip--real">TRANSIT LOGGED · NO PENALTY</span>
                <strong>Within registered GVW. Vehicle proceeds without disruption.</strong>
              </div>
            )}
            {runState === "complete" && (
              <div className="live-demo__evidence-package">
                <div className="evidence-header">
                  <span className="mono status-chip status-chip--real">CONFIRMED OVERLOAD</span>
                  <span className="mono">EVIDENCE PACKAGE SEALED</span>
                </div>
                <div className="evidence-grid mono">
                   <div>
                     <small>LEGAL GVW</small>
                     <span>{profile.legal.toFixed(1)}T</span>
                   </div>
                   <div>
                     <small>CERTIFIED WT</small>
                     <span className="text-red">{certifiedWeight.toFixed(1)}T</span>
                   </div>
                   <div>
                     <small>OVERLOAD</small>
                     <span className="text-red">+{overloadPct.toFixed(1)}%</span>
                   </div>
                   <div>
                     <small>DEMO PENALTY</small>
                     <span className="text-saffron">₹{demoPenalty.toLocaleString("en-IN")}</span>
                   </div>
                </div>
                <div className="evidence-footer mono">
                   <div className="evidence-row">
                      <span>TIMESTAMP</span>
                      <span>{timestamp}</span>
                   </div>
                   <div className="evidence-row">
                      <span>SENSOR ID</span>
                      <span>BN-LS-WIM-0441</span>
                   </div>
                   <div className="evidence-row">
                      <span>CALIBRATION</span>
                      <span>LM-CERT-2026-03</span>
                   </div>
                   <div className="evidence-row hash-row">
                      <span>SHA-256 HASH</span>
                      <span>{evidenceHash}</span>
                   </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
