﻿using Microsoft.EntityFrameworkCore;

namespace EventManagementSystem.Services
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
