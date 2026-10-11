import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div className="container mx-auto">
            <h2>Reset Password Page</h2>
            <Suspense fallback="Loading...">
                <ResetPasswordForm></ResetPasswordForm>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;<h2>Reset Password Page</h2>