import React from 'react'
import "./Articles.css"
import LagreArticleGallery from './LagreArticleGallery';
import SmallArticleGallery from './SmallArticleGallery';
import { Label } from "../StyledComponents/Label";

const Articles = () => {
  return (
    <div>
      <div className="dense-container">
        <div className="large-articles">
          <LagreArticleGallery/>
        </div>
        <div className="medium-articles">
          <div>
            <img
              style={{ height: "100%", textAlign: "center" }}
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1649083432/kon1zled3j9pkniq6omt.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>
              Considered Collaboration: Inside the Ahluwalia &PaulSmith
              Collection
            </h4>
          </div>
          <Label> FASHION | APR 6</Label>
        </div>
        <div className="small-articles">
         <SmallArticleGallery/>
        </div>
      </div>
    </div>
  );
}

export default Articles
