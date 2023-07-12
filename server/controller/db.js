import * as db from "~~/server/db/index.js";

export const readPortfolio = async () => {
  try {
    const portfolio = await db.read("tblPortfolio");
    return {
      portfolio,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "something went wrong",
    });
  }
};

export const readProjects = async () => {
  try {
    const projects = await db.read("tblProjects");
    return {
      projects,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "something went wrong",
    });
  }
};

export const readServices = async () => {
  try {
    const services = await db.read("tblServices");
    return {
      services,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "something went wrong",
    });
  }
};

// export const readSkills = async () => {
//   try {
//     const skills = await db.read("tblSkills");
//     return {
//       skills,
//     };
//   } catch (error) {
//     console.log(error);
//     throw createError({
//       statusCode: 500,
//       statusMessage: "something went wrong",
//     });
//   }
// };
// export const readTechnologies = async () => {
//   try {
//     const technologies = await db.read("tblTechnologies");
//     return {
//       technologies,
//     };
//   } catch (error) {
//     console.log(error);
//     throw createError({
//       statusCode: 500,
//       statusMessage: "something went wrong",
//     });
//   }
// };
