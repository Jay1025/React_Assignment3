import "../shared/App.css"
import React from "react";
import { Grid, Image, Text, Button } from "../elements";

// import {history} from "../redux/configureStore";

 const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.user_info.user_profile} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid width="auto">
            <Text align="right">{props.insert_dt}</Text>
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick={() => {
                // history.push(`/write/${props.id}`);
              }}>
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "JayPro",
    user_profile: "https://src.hidoc.co.kr/image/lib/2021/1/20/1611132055778_0.jpg",
  },
  image_url: "https://src.hidoc.co.kr/image/lib/2021/1/20/1611132055778_0.jpg",
  contents: "고양이!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;