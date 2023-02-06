import React, { useEffect, useState } from "react";
import Blog from "../../components/Blog/Blog";
import client from "../api/client";

const index = () => {
  // getting the data from the backend
  const dummyData = [
    {
      id: "name-to-be-showed-in-the-link1",
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
      date: "25 August 2022",
      img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
      content: [
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
      ],
    },
    {
      id: "name-to-be-showed-in-the-link2",
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
      date: "25 August 2022",
      img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
      content: [
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
      ],
    },
    {
      id: "name-to-be-showed-in-the-link3",
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
      date: "25 August 2022",
      img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
      content: [
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
      ],
    },
    {
      id: "name-to-be-showed-in-the-link4",
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
      date: "25 August 2022",
      img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
      content: [
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
      ],
    },
    {
      id: "name-to-be-showed-in-the-link5",
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
      date: "25 August 2022",
      img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
      content: [
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
        {
          heading: "veritatis voluptas magni commodi cum est",
          para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
        },
      ],
    },
  ];
  const [BlogData, setBlogData] = useState([]);
  useEffect(() => {
    const getBlogData = async () => {
      const allProduct = await client.fetch(`*[_type=='blog']`);
      if (allProduct && allProduct.length > 0) {
        setBlogData(allProduct);
      }
    };
    getBlogData();
  }, []);
  return <div>{BlogData.length > 0 && <Blog blogData={BlogData} />}</div>;
};

export default index;
