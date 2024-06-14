import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title, description, imageUrl, url} = this.props
    return (
        <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4YMYGEX4LZ454Z6YPFIQ7H7ZH4_size-normalized.jpg&w=1440" : imageUrl}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
        </div>
    </div>
    )
  }
}

export default NewsItem