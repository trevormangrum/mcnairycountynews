import React from "react";
interface Props {
    text: string;
    method: string;
    type: string;
}
const AdminItem: React.FC<Props> = ({text, method, type}) => {
    return(
        <div className="teaser admin-item">
            <input type="hidden" name="text" value={text} />
            {type == "articles" &&
                <h2>{text}</h2>
            }
            {type == "archives" && (
                <h2>
                {new Date(text).toLocaleString("en-US", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
                </h2>
            )}
            {method == "update" && ( 
                /* Clicking update on an article or archive will bring you to a form that is populated with the article's/archive's information.  */
                <a href='#'  className="button" >{method}</a>
            )
            }
            {method != "update" && 
                /*This button will make a call to an API route to delete an article/archive */
                <button type="button"  className="button" formAction={`/api/admin/${method}?text=${text}&type=${type}`}>{method}</button>
            }
        </div>
    )
}
export default AdminItem;