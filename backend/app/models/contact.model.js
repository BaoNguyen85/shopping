module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: [true, "Username is required"],
            },
            email: {
                type: String,
                trim: true,
                lowercase: true,
            },
            address: String,
            phone: String,
            favorite: Boolean,
            ownerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("user", schema);
};
