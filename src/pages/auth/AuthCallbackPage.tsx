import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(() => navigate("/dashboard", { replace: true }));
  }, []);
  return <div className="min-h-screen flex items-center justify-center">Authenticating...</div>;
}