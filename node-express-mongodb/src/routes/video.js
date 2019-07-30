import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const videos = await req.context.models.Video.find({});

  return res.send(videos);
});

router.get('/:videoId', async (req, res) => {
  const video = await req.context.models.Video.findById(
    req.params.videoId,
  );
  return res.send(video);
});

router.post('/', async (req, res) => {
  const video = await req.context.models.Video.create({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  });

  return res.send(video);
});

router.delete('/:videoId', async (req, res) => {
  const video = await req.context.models.Video.findById(
    req.params.videoId,
  );

  let result = null;
  if (video) {
    result = await video.remove();
  }

  return res.send(result);
});

export default router;
