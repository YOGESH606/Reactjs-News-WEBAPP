import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClock } from '@fortawesome/free-regular-svg-icons';
export default function Col1({ title, description, img, time, count }) {

    if (count % 2 !== 0) {
        return (
            <div>
                <h3 className={count === 1 ? "news-bold-heading" : "news-heading"}>{title}</h3>
                <p className="txt">{description} </p>
                <div className="icons">
                    <p className="icons-comment-clock"> <FontAwesomeIcon icon={faComment} /> 400 </p>
                    <p className="icons-comment-clock"> <FontAwesomeIcon icon={faClock} />  4 Min</p>
                </div>
                <hr />
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 className=" news-heading ">{title}</h3>
                <div className="d-flex">
                    <div>
                        <p className="news-content">{description} </p>
                        <div className="icons">
                            <p className="text-danger">{moment(time).fromNow()}  </p>
                            <p className="icons-comment-clock"> <FontAwesomeIcon icon={faClock} />  4 Min</p>
                        </div>
                    </div>
                    <img src={img}  className="news-small-img" alt="description" />
                </div>
                <hr />
            </div>
        )

    }


}
