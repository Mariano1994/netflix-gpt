import z from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(5, { message: "Name is required" }),
  email: z.string().email(),
  message: z.string().min(1),
});

export const SignUpFormSchema = z.object({
  name: z.string().trim().min(5, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().trim().min(5, { message: "Phone number is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters" }),
});

export interface MOVIE {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface VIDEO {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
