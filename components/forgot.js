import {Box, Avatar, Text, Divider, IconButton, Column, Button, Link, Heading, Mask, Image, TextField, Toast} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";
import Router from 'next/router';

class Forgot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        error: null,
        username: "",
    }
  }

  forgot = () => {
    fetch('https://savacloud.herokuapp.com/forgot', {
        method: "POST", 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: this.state.username})
    })
    .then(result => {
        if(result.status === 200) return result.json()
        else throw Error("lỗi đăng nhập")
    })
    .then(result => {
        this.setState({error: null})
        localStorage.setItem('token', result.token);
        this.props.changeRoute('main')
    })
    .catch(e => {
        this.setState({error: e})
        setTimeout(() => {
            this.setState({error: null})
        }, 1000)
    })
  }

  render() {
      return(
        <Box>
            <Box height="10vh" marginTop={8} display="flex" justifyContent="center">
                <Mask shape="rounded" height="100%"  width="10vh">
                    <Image 
                        alt="logo"
                        src="../static/sava.png"
                        naturalHeight={1}
                        naturalWidth={1}
                    />
                </Mask>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={3}>
                <Heading size="xs">Quên mật khẩu</Heading>
            </Box>
            <Box marginTop={10} paddingX={4}>
                <TextField placeholder="Email hoặc tên đăng nhập" onChange={({value}) => {this.setState({username: value})}} value={this.state.username} id="username"/>
            </Box>
            <Box marginTop={5} paddingX={4}>
                <Button text="Gửi yêu cầu" color="blue" onClick={e => {
                    e.event.preventDefault()
                    e.event.persist();
                    this.forgot()
                }}
                 />
            </Box>
            <Box
          fit
          dangerouslySetInlineStyle={{
            __style: {
              bottom: 50,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
          paddingX={1}
          position='fixed'
        >
          {this.state.error !== null ? (
              <Toast
                text={['Có lỗi xảy ra!']}
              />
          ) : null}
        </Box>
        </Box>
      )
  }
}

export default Forgot