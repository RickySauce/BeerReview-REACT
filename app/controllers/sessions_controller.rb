class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params["user"]["username"])
    if !@user
      @message = "Username does not exist"
      render :json => { :message => @message}
    else
      if !@user.authenticate(params["login"]["password"])
          @message = "Incorrect Password"
          render :json => {:message => @message}
      else
        render :json => @user
      end
    end
  end

end
