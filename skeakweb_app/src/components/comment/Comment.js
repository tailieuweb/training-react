import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: []
        }
        this.onsubmit = this.onsubmit.bind(this);
        //bind trả về về dữ liệu sự kiện 
    }

    componentDidMount() {
        const comments = JSON.parse(localStorage.getItem('comments'));


        if (comments) {
            this.setState({
                comment: comments
            })
        }
    }
    //lenght min , length maxxx trong input
    onsubmit(e) {

        e.preventDefault();
        if (e.target.formName.value.length <= 0) {
            alert(' Phải nhập đủ thong');
            return;
        }
        let obj = this.state.comment;
        var date = new Date(); //To get the Current Date
        console.log(date);
        const newOBJ = {
            email: e.target.formEmail.value,
            name: e.target.formName.value,
            comment: e.target.formCmt.value,
            date: date+'',

        }

        obj.unshift(newOBJ);
        this.setState({
            comment: obj
        });
        //console.log(this.state.comment)
        localStorage.setItem('comments', JSON.stringify(obj));
    }
    render() {
        const listCMT = this.state.comment;
        const renderCMT = listCMT.map((commnent, i) => {
            return <Alert color="primary" key={i}>
                {commnent.name}<br />
                {commnent.email}<br />
                {commnent.comment}<br/>
                {commnent.date}
            </Alert>;
        });
        return (
            <Container className="py-5">
                <div>
                    {renderCMT}
                </div>
                <Form onSubmit={this.onsubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="formEmail" placeholder="Your Email" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="formName" placeholder="Your Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Comment</Label>
                        <Input type="textarea" name="formCmt" placeholder="Comment Here" />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    };
}

export default Comment;
    // hangừ số : const (không thể thay đổi được trong xuốt quá trình )
    //var: thay đổi được và có thể sự dụng khắp nơi trong file.
    // let chỉ sự dung {}