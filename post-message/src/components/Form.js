import React from 'react';



const Form =({submitForm, setText,text,data})=>{





    return(
        <div>
            <div id="container">
			<div class="text-field">
				<form onSubmit={submitForm}>
					<div class="message">
						<label for="message">Post a message</label><br/>
						<textarea
						class="form-control" 
						value={text}
							id={data._id}
							name="message"
							rows="3"
							minlength="25"
                            onChange={(e)=>setText(e.target.value)}
						></textarea>
					</div>
					<button type="submit" class="btn btn-success"
                    >Post a message</button>
				</form>
			</div>
        </div>
        </div>
    )
}
export default Form;