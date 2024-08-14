const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await prisma.course.findMany();
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};

exports.createCourse = async (req, res, next) => {
  const { title, description, content, language } = req.body;
  try {
    const course = await prisma.course.create({
      data: {
        title,
        description,
        content,
        language,
      },
    });
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};
