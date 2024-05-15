const register = (req, res) => {
    const { name } = req.body;
    res.status(200).json({ msg: `Hola Mundo ${name}` });
};

export { register };
