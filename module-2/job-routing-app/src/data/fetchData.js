import jobs from "./jobs.json";

async function getJobs(page, q = null) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

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

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return jobs.find((job) => job.id == id);
}

export default { getJobs, getJob };
