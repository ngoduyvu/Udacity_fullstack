import express from 'express';

const logger = (
    req: express.Request,
    next: Function,
): void => {
  const url = req.url;
  console.log(`${url} was visited`);
  next();
};

export default logger;
