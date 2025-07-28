// queries/getTimeline.ts
import datoCMSClient from "./datoCMSClient";
import { Skill } from "../types";

const GET_SKILLS = `
{
  allSkills {
    name
    category
    description
    icon
    customIcon {
      url
    }
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
  return data.allSkills;
}
