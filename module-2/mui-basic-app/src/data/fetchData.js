import jobs from "./jobs.json";

function getJobs(page, q = null) {
  if (q) {
    let filtedJobs = jobs.filter(
      (job) =>
        job.title.includes(q) ||
        job.description.includes(q) ||
        job.city.includes(q) ||
        job.skills.some((skill) => skill.includes(q))
    );
    return { jobs: filtedJobs, pagesTotal: 1 };
  } else {
    return { jobs: jobs.slice((page - 1) * 6, page * 6 - 1), pagesTotal: 2 };
  }
}

function getJob(id) {
  return jobs.find((job) => job.id == id);
}

export default { getJobs, getJob };
