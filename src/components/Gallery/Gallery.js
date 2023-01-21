

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
]


<ResponsiveMasonry
columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
<Masonry gutter="20px">
    {this.images.map((image, i) => (
        <img
            key={i}
            src={image}
            style={{width: "100px"}}
            alt=""
            onClick={e=>{alert('fuck!')}}
        />
    ))}
</Masonry>
</ResponsiveMasonry>