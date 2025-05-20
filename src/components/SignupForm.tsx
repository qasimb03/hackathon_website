import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const YC_LINK = "https://www.ycombinator.com/rfs/";

const SignupForm = ({ variant = "default" }: { variant?: "default" | "outline" }) => {
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [registerDisabled, setRegisterDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    idea: "",
    linkedin: "",
    team: "",
    in_person: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  
    if (name === "phone_number") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (name === "in_person") {
      setForm((prev) => ({ ...prev, [name]: value === "true" }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    const { data: existingUser, error: fetchError } = await supabase
      .from("hackathon_signups")
      .select("email")
      .eq("email", form.email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Error checking email:", fetchError);
      setEmailError("Something went wrong. Please try again.");
      return;
    }

    if (existingUser) {
      setEmailError("This email is already registered.");
      return;
    }

    const { data, error } = await supabase.from("hackathon_signups").insert([form]);

    if (error) {
      console.error("Insert error:", error);
      setEmailError("Failed to submit. Please try again.");
    } else {
      setSubmitted(true);
      setForm({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        idea: "",
        linkedin: "",
        team: "",
        in_person: false
      });
      setOpen(false);
      navigate("/");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          disabled={registerDisabled}
          className="px-20 py-6 text-lg font-bold rounded shadow transition-all duration-200 min-w-[140px] border-2 border-hackathon-accent bg-transparent text-hackathon-accent hover:bg-hackathon-accent hover:text-hackathon-dark"
        >
          Register
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto sm:max-w-[90%] md:max-w-[700px] bg-hackathon-dark border-hackathon-accent p-6"
      >
        <DialogHeader>
          <DialogTitle className="text-hackathon-accent text-center">
            Register For Hack2Fund
          </DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="first_name" className="text-hackathon-accent">
                First Name *
              </Label>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={form.first_name}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="John"
              />
            </div>
            <div>
              <Label htmlFor="last_name" className="text-hackathon-accent">
                Last Name *
              </Label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={form.last_name}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="Doe"
              />
            </div>
            <div>
              <Label htmlFor="phone_number" className="text-hackathon-accent">
                Phone Number *
              </Label>
              <Input
                id="phone_number"
                name="phone_number"
                type="tel"
                required
                value={form.phone_number}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="(555)-123-4567"
                pattern="\d{10}"
                maxLength={10}
                inputMode="numeric"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-hackathon-accent">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`mt-1 bg-hackathon-accent border-hackathon-dark text-hackathon-dark placeholder:text-hackathon-dark/40 ${
                  emailError ? "border-red-500 text-red-300 placeholder-red-400" : ""
                }`}
                placeholder="your@email.com"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <Label htmlFor="linkedin" className="text-hackathon-accent">
                LinkedIn Link *
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                required
                value={form.linkedin}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="linkedin.com/in/example-profile"
              />
            </div>
            <div className="flex flex-col">
            <Label htmlFor="in_person" className="text-hackathon-accent">
              In-Person (True/False) *
            </Label>
            <select
              id="in_person"
              name="in_person"
              required
              value={form.in_person.toString()}
              onChange={handleChange}
              className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark px-2 py-1 rounded"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
            <div>
              <Label htmlFor="team" className="text-hackathon-accent">
                Team (Up To 5 People) [Optional]
              </Label>
              <Input
                id="team"
                name="team"
                value={form.team}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="John Doe, Jane Doe, ..."
              />
            </div>
            <div>
              <Label htmlFor="idea" className="text-hackathon-accent">
                Idea(s) [Optional]
              </Label>
              <Textarea
                id="idea"
                name="idea"
                value={form.idea}
                onChange={handleChange}
                className="mt-1 bg-hackathon-accent border-hackathon-accent placeholder:text-hackathon-dark/40 text-hackathon-dark"
                placeholder="Describe your idea(s)!"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2 items-center justify-center">
              <a
                href={YC_LINK}
                className="text-hackathon-accent underline hover:text-hackathon-accent-300 transition story-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                RFS - Get Inspired
              </a>
              <Button
                type="submit"
                className="w-full mt-4 hover:bg-hackathon-accent hover:border-hackathon-accent hover:text-hackathon-dark bg-hackathon-dark text-hackathon-accent font-bold"
              >
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <div className="py-8 flex flex-col items-center">
            <div className="text-green-400 text-lg font-bold mb-6 animate-fade-in">
              Thank you for registering!
            </div>
            <Button
              className="bg-hackathon-accent-500 text-black hover:bg-hackathon-accent-400 font-bold"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignupForm;
