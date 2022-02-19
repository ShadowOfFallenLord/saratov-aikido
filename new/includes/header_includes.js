import { HTMLTags } from "./htmlTags.js";

export const headerItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" },
    childs: [
        {
            tag: HTMLTags.TableRow,
            attributes: { class: "align_center" },
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: "align_left width_20" },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_left.gif", class: 'header_height' }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: 'width_60' },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_center.gif", class: 'header_height' }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: "align_right width_20" },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: '/pic/header/header_right.gif', class: 'header_height' }
                        }
                    ],
                }
            ],
        }
    ]
}