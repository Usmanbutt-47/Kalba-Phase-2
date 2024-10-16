export const dataForServer = (values:any) => {

    return {
        title: values?.title,

        courseRate: parseFloat(values?.courseRate),

        // teacherId: Number(values?.teacherId),

        description: values?.description,

        // bannerUrlId: Number(values?.bannerUrl),
        bannerUrl: values?.bannerUrl,

        bannerDescriptor: values?.bannerDescriptor,

        isPaidCourse: values?.isPaidCourse === 'false' ? false : true,

        thumbnailUrl: values?.thumbnailUrl,

        thumbnailDescriptor: values?.thumbnailDescriptor,
        // thumbnailUrlId: Number(values?.thumbnailUrl)

    }
}