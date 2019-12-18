import React from 'react';
import {Box, Avatar, Text, Divider, Column, Heading, Mask, Image} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Profile extends React.Component {
  render() {
    return(
      <Box>
        <Box>
          <Mask shape="rounded" width="100%" height="40vh">
            <Image
              alt={this.props.name}
              src={this.props.cover}
              naturalHeight={1}
              naturalWidth={1}
            />
          </Mask>
        </Box>
        <Box marginTop={2} display="flex" alignItems="center">
          <Column span={9}>
            <Box>
              <Heading size='sm' >{this.props.name}</Heading>
            </Box>
            <Box >
            <Text weight="bold" >Xếp hạng 11 . {this.props.score} điểm</Text>
          </Box>
          <Box >
            <Text weight="bold" >{this.props.family}</Text>
          </Box>
          </Column>
          <Column span={3}>
            <Box>
              <Mask shape="circle" width="100%">
                <Image
                  alt={this.props.name}
                  src={this.props.avatar}
                  naturalHeight={1}
                  naturalWidth={1}
                />
              </Mask>
            </Box>
          </Column>
        </Box>
        <Box paddingY={3} height="3rem">
          <Text> Trên con đường thành công không có dấu chân của kẻ lười biếng  </Text>
        </Box>
      </Box>
    )
  }
}

export default Profile;