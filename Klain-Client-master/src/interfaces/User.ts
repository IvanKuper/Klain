export type User = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  roles?: string[];
  mitham?: string;
  gush?: string;
  helka?: string;
  bussinessName?: string;
  specialName?: string;
};

export type BusinessUser = User & { bussinessName?: string };
// export type SpecialUser = User & { specialName: string };
