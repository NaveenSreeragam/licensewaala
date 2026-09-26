"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CarFront, Mail, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    const supabase = createClient();
    if (!supabase) { setStatus("Supabase is not configured yet. Add the environment variables from .env.example."); return; }
    setBusy(true); setStatus(null);
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/` } });
    setBusy(false); setStatus(error ? error.message : "Check your email for your secure sign-in link.");
  }
  return <main className="auth-page"><Link href="/" className="auth-back"><ArrowLeft size={16}/> Back to Licence Wallah</Link><section className="auth-card"><div className="auth-mark"><CarFront/></div><p className="eyebrow">WELCOME TO LICENCE WALLAH</p><h1>Save your learning journey.</h1><p>Sign in to keep your practice sessions, mistakes, and progress securely synced.</p><form onSubmit={signIn}><label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com"/></label><button className="lime" disabled={busy}><Mail size={16}/>{busy ? "Sending…" : "Email me a sign-in link"}</button></form>{status && <div className="auth-status"><ShieldCheck size={16}/>{status}</div>}<small>Practice scores are educational only and are not official licensing results.</small></section></main>;
}
